import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

Base = declarative_base()

class User(Base):
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    is_active = Column(Boolean)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email
        }