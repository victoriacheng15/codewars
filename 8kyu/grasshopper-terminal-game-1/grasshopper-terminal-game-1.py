class Hero:
    def __init__(self, name='Hero', position='00', health=100, damage=5, experience=0):
        self.name = name
        self.position = position
        self.health = health
        self.damage = damage
        self.experience = experience

hero = Hero("Hero", "00", 100, 5, 0)
print(hero.name)
print(hero.position)
print(hero.health)
print(hero.damage)