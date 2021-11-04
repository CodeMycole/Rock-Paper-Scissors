import random

#Game repeater
play_again = 'yes'

while play_again == 'yes':

    choices = ['rock', 'paper', 'scissors']
    player_choice = input('Choose rock, paper, or scissors: ')
    player_choice = player_choice.lower()
    computer_choice = random.choice(choices)

    #function for deciding winner
    def choose_winner(player_choice, computer_choice):
        print("Computer chose: " + computer_choice)
        if player_choice == computer_choice:
            print("Its a tie!")
        elif player_choice == 'scissors':
            if computer_choice == 'rock':
                print("Rock crushes scissors. You lose!")
            else:
                print("Scissors cut paper. You win!")
        elif player_choice == 'paper':
            if computer_choice == 'scissors':
                print("Scissors cut paper. You lose!")
            else: 
                print("Paper covers rock. You win!")
        else:
            if computer_choice == 'paper':
                print("Paper covers rock. You lose!")
            else:
                print("Rock crushes scissors. You win!")

    choose_winner(player_choice, computer_choice)
    
    play_again = input('Would you like to play again?: ')
    play_again = play_again.lower()
