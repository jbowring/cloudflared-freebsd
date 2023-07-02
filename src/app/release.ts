export interface Release {
  version: string;
  platform: string;
  binary7zipPath: string;
  binarySHA1Path: string;
  buildDate: Date;
  releaseDate: Date;
}
