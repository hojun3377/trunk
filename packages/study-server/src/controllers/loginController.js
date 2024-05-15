import jwt from "jsonwebtoken";

const login = (req, res) => {
  const { email, password } = req.body;

  /**
   * db 조회 로직 추가
   */

  /**
   * test 코드
   * email: test
   * password: test
   */
  if (email === "test" && password === "test") {
    // email, password 정보 있음

    /**
     * jwt 발행
     * payload: { email }
     * secret: process.env.JWT_SECRET_KEY
     * expiresIn: 30m
     * issuer: hojun
     */
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30m",
      issuer: "hojun",
    });

    /**
     * cookie 생성
     * name: "token"
     * value: jwt
     * httpOnly: true
     */
    res.cookie("token", token, {
      httpOnly: true,
    });

    /**
     * response
     * status: 200(OK)
     * body: { message: `${email}님 로그인 성공` }
     */
    res.status(200).json({ message: `${email}님 로그인 성공` });
  } else {
    // email, password 정보 없음

    res.status(401).json({ message: "로그인 실패: 잘못된 사용자 정보" });
  }
};

export default { login };
