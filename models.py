from google.appengine.ext import ndb

class User(ndb.Model):
  user_name = ndb.StringProperty()
  height = ndb.IntegerProperty()
  weight = ndb.IntegerProperty()
  skill_level = ndb.StringProperty()
  birthdate = ndb.DateTimeProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
#form that you add user 


class Routine(ndb.Model):
  quantity = ndb.IntegerProperty()
  description = ndb.IntegerProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
#for the + button on activities need jinja sayin gif click then add form and break if press submit 


class Awards(ndb.Model):
  category = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  user_key = ndb.KeyProperty()
  routine_key = ndb.KeyProperty()

class Profile(ndb.Model):
  workout_data = ndb.StringProperty()
  user_key = ndb.KeyProperty()
  awards_key = ndb.KeyProperty()
