//import { pathsToModuleNameMapper} from "ts-jest/utils";
import { pathsToModuleNameMapper } from "ts-jest"
import { compilerOptions } from "./tsconfig.json";

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/"
   }),
  preset: "ts-jest",

   testMatch: [
     "**/*.spec.ts",
   ],

};
