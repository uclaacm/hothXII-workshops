import pygame
import random

pygame.init()

# Setup for the window
screen = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Dodge the Squares")

# Player
player_x = 400
player_y = 500
player_speed = 0.7

# Block
block_x = random.randint(0, 750)
block_y = -50
block_speed = 0.4

# Score
score = 0
font = pygame.font.SysFont(None, 36)

# Game state
playing = True
game_over = False

# Game Loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    if playing:
        player_rect = pygame.Rect(player_x, player_y, 50, 50)
        block_rect = pygame.Rect(block_x, block_y, 50, 50)

        screen.fill((0, 0, 0))
        pygame.draw.rect(screen, (255, 0, 0), (player_x, player_y, 50, 50))
        pygame.draw.rect(screen, (0, 0, 255), (block_x, block_y, 50, 50))
        
        score_text = font.render(f"Score: {score}", True, (255, 255, 255))
        screen.blit(score_text, (10, 10))

        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and player_x > 0:
            player_x -= player_speed
        if keys[pygame.K_RIGHT] and player_x < 750:
            player_x += player_speed

        block_y += block_speed
        if block_y > 600:
            block_y = -50
            block_x = random.randint(0, 750)
            score += 1

        if player_rect.colliderect(block_rect):
            playing = False
            game_over = True
    
    elif game_over:
        screen.fill((0, 0, 0))
        game_over_text = font.render(f"Game Over! Score: {score}", True, (255, 255, 255))
        quit_text = font.render("Press Q to Quit", True, (255, 255, 255))
        screen.blit(game_over_text, (800 // 2 - 100, 600 //  2 - 20))
        screen.blit(quit_text, (800 // 2 - 100, 600 //  2 + 20))

        keys = pygame.key.get_pressed()
        if keys[pygame.K_q]:
            running = False

    pygame.display.flip()

pygame.quit()
print(f"Game Over! Final Score: {score}")