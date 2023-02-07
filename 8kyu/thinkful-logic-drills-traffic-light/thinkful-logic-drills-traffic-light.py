def update_light(current):
    signals = {
      "green": "yellow",
      "yellow": "red",
      "red": "green"
    }
    return signals[current]