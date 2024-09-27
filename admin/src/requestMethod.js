import axios from "axios";
const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWMxMmJlN2M4ZjJhZDMwMTM2Y2M1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNjc0Nzc0NywiZXhwIjoxNzI3MDA2OTQ3fQ.AwXx0gpePLbqr99WQSHflvuar_HFsmpe5-QE_nl_b3o";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
