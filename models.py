from google.appengine.ext import ndb

class User(ndb.Model):
  name = ndb.StringProperty()
  height = ndb.IntegerProperty()
  weight = ndb.IntegerProperty()
  skill_level = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)


class Awards(ndb.Model):
  login_awards = ndb.IntegerProperty()
  workout_awards = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)


class Profile(ndb.Model):
  workout_data = ndb.StringProperty()
  # awards = ndb.StringProperty()
  user_key = ndb.KeyProperty()
  awards_key = ndb.KeyProperty()
