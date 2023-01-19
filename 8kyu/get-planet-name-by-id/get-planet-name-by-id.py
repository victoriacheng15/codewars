# def get_planet_name(id):
#     name=""
#     match id:
#         case 1: name = "Mercury"
#         case 2: name = "Venus"
#         case 3: name = "Earth"
#         case 4: name = "Mars"
#         case 5: name = "Jupiter"
#         case 6: name = "Saturn"
#         case 7: name = "Uranus"  
#         case 8: name = "Neptune"
#     return name

def get_planet_name(id):
  planets = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus", 
    8: "Neptune",
  }
  return planets[id]


# write unit test to test get_planet_name function
def test_get_planet_name():
    assert get_planet_name(1) == "Mercury"
    assert get_planet_name(2) == "Venus"
    assert get_planet_name(3) == "Earth"
    assert get_planet_name(4) == "Mars"
    assert get_planet_name(5) == "Jupiter"
    assert get_planet_name(6) == "Saturn"
    assert get_planet_name(7) == "Uranus"  
    assert get_planet_name(8) == "Neptune"
    
