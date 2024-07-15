const { whoWon } = require('../RPS.js');

describe("whoWon", function() {
    test("Should return 'TIE!' if players tie.", function() {
        let output = whoWon("rock", "rock");
        expect(output).toBe('TIE!');
    });

    test("Should return 'Player 1 wins!' if player 1 plays rock and player 2 plays scissors.", function() {
        let output = whoWon("rock", "scissors");
        expect(output).toBe('Player 1 wins!');
    });

    test("Should return 'Player 1 wins!' if player 1 plays paper and player 2 plays rock.", function() {
        let output = whoWon("paper", "rock");
        expect(output).toBe('Player 1 wins!');
    });

    test("Should return 'Player 1 wins!' if player 1 plays scissors and player 2 plays paper.", function() {
        let output = whoWon("scissors", "paper");
        expect(output).toBe('Player 1 wins!');
    });

    test("Should return 'Player 2 wins!' if player 1 plays rock and player 2 plays paper.", function() {
        let output = whoWon("rock", "paper");
        expect(output).toBe('Player 2 wins!');
    });

    test("Should return 'Player 2 wins!' if player 1 plays paper and player 2 plays scissors.", function() {
        let output = whoWon("paper", "scissors");
        expect(output).toBe('Player 2 wins!');
    });

    test("Should return 'Player 2 wins!' if player 1 plays scissors and player 2 plays rock.", function() {
        let output = whoWon("scissors", "rock");
        expect(output).toBe('Player 2 wins!');
    });

    test("Should return 'invalid entry' if player 1 or player 2 does not enter rock, paper, or scissors.", function() {
        let output = whoWon("rock", "beer");
        expect(output).toBe('Invalid entry.');
    })
});