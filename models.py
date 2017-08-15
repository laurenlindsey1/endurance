from google.appengine.ext import ndb

class Routine(ndb.Model):
  quantity = ndb.StringProperty()
  description = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  user_id = ndb.StringProperty()

class Awards(ndb.Model):
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  routine_key = ndb.KeyProperty()

class Profile(ndb.Model):
  user_id = ndb.StringProperty()
  name = ndb.StringProperty()


