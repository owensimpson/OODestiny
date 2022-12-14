import {OpenAPIObject} from 'openapi3-ts';
import {docComment, generateHeader, writeOutFile} from './generate-common.js';
import {DefInfo, getRef} from './util.js';

export function generateIndices(
    componentsByTag: { [p: string]: DefInfo[] },
    doc: OpenAPIObject,
    componentsByFile: Map<string, DefInfo>
) {
    generateSchemaIndex(doc, componentsByFile);
    generateEndpointsSuperIndex(componentsByTag, doc);
}

function generateSchemaIndex(
    doc: OpenAPIObject,
    componentsByFile: Map<string, DefInfo>
) {
    const filename = 'lib-ts/schemas/index.ts';


    const exports: string[] = [];
    for (const [component,defInfo] of componentsByFile) {
        exports.push(`export ${getRef(doc, defInfo.def)?.enum ? "" : "type "}{ ${defInfo.typeName} } from '${component
            .replace('schemas/', './')
            .replace('.ts', '.js')}';`)
    }

    const definition = [generateHeader(doc),exports.join('\n')].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}

function generateEndpointsSuperIndex(componentsByTag: { [p: string]: DefInfo[] }, doc: OpenAPIObject) {
    const filename = 'lib-ts/endpoints/index.ts';
    const exportLines = [];

    for (const exportName of Object.keys(componentsByTag)) {
        exportLines.push(`export * as ${exportName} from './${exportName}/index.js';`);
    }
    const exportHeader = exportLines.join('\n');

    const definition = [generateHeader(doc),exportHeader].join('\n\n') + '\n';

    writeOutFile(filename, definition);
}
