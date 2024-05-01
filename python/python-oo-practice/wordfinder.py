import random

class WordFinder:
    def __init__(self, path):
        self.path = path
        self.words = []
        self.load_words()
    
    def load_words(self):
        with open(self.path, 'r') as file:
            self.words = [line.strip() for line in file if line.strip()]
        print(f"{len(self.words)} words read")
    
    def random(self):
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    def load_words(self):
        with open(self.path, 'r') as file:
            self.words = [line.strip() for line in file if line.strip() and not line.startswith('#')]
        print(f"{len(self.words)} words read")



