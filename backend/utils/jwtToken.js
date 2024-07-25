export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  res
    .status(statusCode)
    .cookie("token", token, {
      maxAge:  process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
      path: "/",
      secure: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
