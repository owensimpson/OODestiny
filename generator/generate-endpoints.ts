import {
    DefInfo,
    isReferenceObject,
    isRequestBodyObject,
    lastPart,
    lcFirst,
    resolveSchemaType,
} from './util.js';
import {OpenAPIObject, ParameterObject, PathItemObject,} from 'openapi3-ts';
import {
    addImport,
    commentHyperReference,
    docComment,
    generateHeader,
    generateImports,
    indent,
    writeOutFile,
} from './generate-common.js';

const httpClientType = `import { HttpClient } from '../../http';`;

export function generateServiceDefinition(
    tag: string,
    paths: [string, PathItemObject][],
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo }
): void {
    const importFiles: { [filename: string]: Set<string> } = {};

    const pathDefinitions = paths.map(([path, pathDef]) =>
        generatePathDefinition(path, pathDef, doc, componentByDef, importFiles)
    );

    const filename = `generated-src/endpoints/${tag}/index.ts`;

    const imports = generateImports(filename, importFiles);

    const definition =
        [generateHeader(doc), httpClientType, imports, ...pathDefinitions].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}

function generatePathDefinition(
    path: string,
    pathDef: PathItemObject,
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo },
    importFiles: { [filename: string]: Set<string> }
) {
    let server = doc.servers![0].url;
    // per https://github.com/Bungie-net/api/issues/853
    // strict condition, so no surprises if doc.servers changes
    if (
        server === 'https://www.bungie.net/Platform' &&
        path.includes('/Stats/PostGameCarnageReport/')
    )
        server = 'https://stats.bungie.net/Platform';
    const typeName = lastPart(pathDef.summary!);
    const functionName = lcFirst(typeName);

    const method = pathDef.get ? 'GET' : 'POST';
    const methodDef = pathDef.get || pathDef.post!;
    const params = (methodDef.parameters || []) as ParameterObject[];

    const queryParameterNames = params
        .filter((param) => param.in === 'query')
        .map((param) => param.name);

    const parameterArgs = ['http: HttpClient'];
    let typeDefinition = '';
    if (params.length) {
        typeDefinition =
            generateParamsSchema(typeName + 'Params', params, doc, componentByDef, importFiles) +
            '\n\n';
        parameterArgs.push(`params: ${typeName}Params`);
    }

    if (methodDef.requestBody) {
        if (isRequestBodyObject(methodDef.requestBody)) {
            const schema = methodDef.requestBody.content['application/json'].schema!;

            const paramType = resolveSchemaType(schema, doc);
            addImport(doc, schema, componentByDef, importFiles);
            const docString = methodDef.requestBody.description
                ? docComment(methodDef.requestBody.description) + '\n'
                : '';
            parameterArgs.push(
                `${docString}body${methodDef.requestBody.required ? '' : '?'}: ${paramType}`
            );
        } else if (isReferenceObject(methodDef.requestBody)) {
            throw new Error("didn't expect this");
        }
    }

    // tslint:disable-next-line:no-invalid-template-strings
    const templatizedPath = path.includes('{')
        ? `\`${server}${path.replace(/{/g, '${params.')}\``
        : `'${server}${path}'`;

    let paramsObject = '';
    if (queryParameterNames.length) {
        const paramInitializers = queryParameterNames.map((p) => {
            const param = params.find((pa) => pa.name === p)!;
            const paramType = resolveSchemaType(param.schema!, doc);

            if (paramType.endsWith('[]')) {
                if (!param.required) {
                    return `${p}: params.${p} ? params.${p}.join(',') : undefined`;
                }
                return `${p}: params.${p}.join(',')`;
            }

            return `${p}: params.${p}`;
        });

        paramsObject = `,
    params: {
${indent(paramInitializers.join(',\n'), 3)}
    }`;
    }

    let requestBodyParam = '';
    if (methodDef.requestBody && isRequestBodyObject(methodDef.requestBody)) {
        requestBodyParam = `,
    body`;
    }

    const returnValue = resolveSchemaType(methodDef.responses['200'], doc);
    addImport(doc, methodDef.responses['200'], componentByDef, importFiles);
    const hyperRef = commentHyperReference('#' + pathDef.summary);

    return `${typeDefinition !== '' ? docComment('', [hyperRef]) + '\n' : ''}${typeDefinition}${docComment(methodDef.description!, [hyperRef])}
export function ${functionName}(${parameterArgs.join(', ')}): Promise<${returnValue}> {
  return http({
    method: '${method}',
    url: ${templatizedPath}${paramsObject}${requestBodyParam}
  });
}`;
}

function generateParamsSchema(
    typeName: string,
    params: ParameterObject[],
    doc: OpenAPIObject,
    componentByDef: { [def: string]: DefInfo },
    importFiles: { [filename: string]: Set<string> }
) {
    const parameterArgs = params.map((param) => {
        const paramType = resolveSchemaType(param.schema!, doc);
        addImport(doc, param.schema!, componentByDef, importFiles);
        const docString = param.description ? docComment(param.description) + '\n' : '';
        return `${docString}${param.name}${
            param.required || (param.name === 'components' && paramType === 'DestinyComponentType[]')
                ? ''
                : '?'
        }: ${paramType};`;
    });

    return `export type ${typeName} = {
${indent(parameterArgs.join('\n'), 1)}
}`;
}