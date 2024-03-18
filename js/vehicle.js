const vehicle = {
  brand: "Volvo",
  speed: 180,
  range: 433,
  maxEnginePower: 408,
  kilometers: 4250,
  transmissionAutomatic: true,
  electric: true,
  ParkingMode: true,
  appsInstalled: ["Spotify", "Google Maps", "TuneInRadio", "Youtube"],
  activateParkingMode: function() {
    if (this.ParkingMode) {
      this.on = false;
      console.log("Engine stopped");
    }
  }
}

vehicle.activateParkingMode();