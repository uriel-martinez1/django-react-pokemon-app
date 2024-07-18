from django.db import models

# added the pokemon model here for the database
class Pokemon(models.Model):
    api_id = models.IntegerField()
    name = models.CharField(max_length=56, unique=True)
    base_experience = models.IntegerField()
    height = models.IntegerField()
    weight = models.IntegerField()
    front_url = models.CharField(max_length=256)
    back_url = models.CharField(max_length=256)

    def __str__(self):
        return self.name
