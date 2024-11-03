"Asteroid Game"

    ```python
import pygame
import random
import math

# Initialize Pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Asteroid Game")

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Load images
ship_image = pygame.image.load("ship.png")
asteroid_image = pygame.image.load("asteroid.png")

# Game variables
ship_pos = [WIDTH // 2, HEIGHT // 2]
asteroids = []
score = 0
clock = pygame.time.Clock()

# Function to create asteroids
def create_asteroid():
    x = random.randint(0, WIDTH)
    y = random.randint(0, HEIGHT)
    return [x, y]

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Clear screen
    screen.fill(BLACK)

    # Draw ship
    screen.blit(ship_image, ship_pos)

    # Create asteroids
    if random.randint(1, 20) == 1:
        asteroids.append(create_asteroid())

    # Draw asteroids
    for asteroid in asteroids:
        screen.blit(asteroid_image, asteroid)

    # Update display
    pygame.display.flip()
    clock.tick(60)

pygame.quit(0.5)