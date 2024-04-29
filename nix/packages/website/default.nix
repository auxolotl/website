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

    npmDepsHash = "sha256-qvpwlPY0dFZX0VAnEdNsJxK5W8MU1twzaShUPyqbpF4=";

    npmFlags = ["--ignore-scripts"];

    installPhase = ''
      mkdir -p $out

      cp -r ./dist/* $out/
    '';
  }
