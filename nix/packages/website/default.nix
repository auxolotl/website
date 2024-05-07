{
  lib,
  writeScriptBin,
  buildNpmPackage,
  ...
}: let
  json = lib.importJSON (lib.snowfall.fs.get-file "package.json");
in
  buildNpmPackage {
    pname = "aux-website";
    inherit (json) version;

    src = lib.snowfall.fs.get-file "/";

    npmDepsHash = "sha256-nNeFo6MF1Bn7Lypgtr/hgpm1lEbdmLR+6/krWH+8zCU=";

    npmFlags = ["--ignore-scripts"];

    installPhase = ''
      mkdir -p $out

      cp -r ./dist/* $out/
    '';
  }
