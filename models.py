from google.appengine.ext import ndb

class Routine(ndb.Model):
  quantity = ndb.StringProperty()
  description = ndb.StringProperty()
  timestamp = ndb.DateProperty(auto_now_add=True)
  usernickname=ndb.StringProperty()

class Awards(ndb.Model):
  timestamp = ndb.DateProperty(auto_now_add=True)
  routine_number=ndb.IntegerProperty()
  usernickname=ndb.StringProperty()


