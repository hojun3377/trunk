const login = (req, res) => {
  const { email, password } = req.body;

  /**
   * db 조회 로직 추가
   */

  /**
   * jwt 토큰 발행 및 송신 추가
   */

  /**
   * test 코드
   * email: test
   * password: test
   */
  if (email === "test" && password === "test") {
    // email, password 정보 있음

    res.status(200).json({ message: `${email}님 로그인 성공` });
  } else {
    // email, password 정보 없음

    res.status(401).json({ message: "로그인 실패: 잘못된 사용자 정보" });
  }
};

export default { login };
