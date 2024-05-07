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

    npmDepsHash = "sha256-aFyw9ySIGQqcJZFuVrFrn7Ntm8nzjTZYnZ5X9d/TiiA=";

    npmFlags = ["--ignore-scripts"];

    installPhase = ''
      mkdir -p $out

      cp -r ./dist/* $out/
    '';
  }
