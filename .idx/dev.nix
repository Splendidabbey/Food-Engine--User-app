{ pkgs }: {
  channel = "stable-24.05";

  packages = [
    pkgs.flutter
    pkgs.jdk17  # Java 17 (Matching Kotlin target)
    pkgs.gradle
    pkgs.android-tools  # ADB & platform tools
    pkgs.unzip
  ];

  idx.previews = {
    previews = {
      web = {
        command = [
          "flutter"
          "run"
          "--machine"
          "-d"
          "web-server"
          "--web-hostname"
          "0.0.0.0"
          "--web-port"
          "$PORT"
        ];
        manager = "flutter";
      };
      android = {
        command = [
          "flutter"
          "run"
          "--machine"
          "-d"
          "android"
          "-d"
          "localhost:5555"
        ];
        manager = "flutter";
      };
    };
  };
}
