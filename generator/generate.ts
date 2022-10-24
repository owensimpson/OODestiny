/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API.
 * The script is a modifed version of the 'bungie-api-ts' script used for DIM, {@link https://github.com/DestinyItemManager/bungie-api-ts/}
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { DefInfo } from './util.js';

import { generateIndices } from './generate-indices.js';
import { generateTypeDefinitions } from './generate-types.js';
import { generateManifestUtils } from './generate-manifest.js';
import { generateServiceDefinition } from './generate-endpoints.js';
import { generatePackageJson } from './generate-package-json.js';
import { computeTypeMaps } from './type-index.js';

// allow some async operations
(async () => {
  const doc = JSON.parse(fs.readFileSync('./api-src/openapi.json').toString()) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

  // Grouped by "tag" which says which service (destiny, groups, forums, etc)
  const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
    return (desc.get || desc.post)!.tags![0];
  });
  pathPairsByTag['Core'] = pathPairsByTag[''];
  delete pathPairsByTag[''];

  const { componentsByFile, componentByDef, componentsByTag, manifestComponents } = computeTypeMaps(pathPairsByTag, doc);

  _.each(componentsByFile, (components: DefInfo[], file: string) => {
    generateTypeDefinitions(file, components, doc, componentByDef);
  });

  // generics
  const generics = ['ServerResponse', 'SingleComponentResponse', 'DictionaryComponentResponse']
  const genericComponents: {[p: string]: DefInfo} = genericDefs(generics)
  _.each(genericComponents, (component: DefInfo, name: string) => {
    generateTypeDefinitions(component.filename, [component], doc, componentByDef);
  });

  await generateManifestUtils(manifestComponents, componentByDef, doc);

  _.each(pathPairsByTag, (paths, tag) => {
    generateServiceDefinition(tag, paths, doc, componentByDef);
  });

  generateIndices(componentsByFile, componentsByTag, generics, doc);

  generatePackageJson();

  // TODO: some way to mark "preview" stuff
})();

function genericDefs(generics: string[]): {[p: string]: DefInfo} {
  return Object.assign({}, ...generics.map((type) => ({[type]: {
    def: type,
      tags: [],
      filename: `generics/${type}.d.ts`,
      typeName: type
  }})));
}