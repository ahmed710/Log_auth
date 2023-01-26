const express =require('express'); 
const Sequelize =require('sequelize');  

module.express = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
  email: {
  type: Sequelize.STRING
  },
  password: {
  type: Sequelize.STRING
  }
  });
  return User;
  };