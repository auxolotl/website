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

    npmDepsHash = "sha256-ze98HddbmkSAgDxJIw1l2YH3EcJ8NKx6Gz++xbcxBM4=";

    npmFlags = ["--ignore-scripts"];

    installPhase = ''
      mkdir -p $out

      cp -r ./dist/* $out/
    '';
  }
