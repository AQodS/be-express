import express from "express";
import { prisma } from "../prisma/client/index.js";

const findUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      },
      orderBy: {
        id: "descs"
      }
    });

    res.status(200).send({
      success: true,
      message: "Get all users successfully",
      data: users
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error"
    });
  }
};

export { findUser };