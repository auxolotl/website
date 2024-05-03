{
  description = "aux website";

  inputs = {
    nixpkgs.url = "github:auxolotl/nixpkgs/nixos-unstable";

    snowfall-lib = {
      url = "github:snowfallorg/lib";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs:
    inputs.snowfall-lib.mkFlake {
      inherit inputs;

      src = ./.;

      alias.packages.default = "website";

      snowfall = {
        root = ./nix;
        namespace = "auxolotl";
      };
    };
}
