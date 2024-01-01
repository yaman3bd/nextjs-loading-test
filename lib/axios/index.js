const Axios = require("axios").default;

const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/tenant`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});

function getTenantHost(req) {
  if (process.env.NEXT_PUBLIC_OVERWRITE_TENANT_DOMAIN) {
    return process.env.NEXT_PUBLIC_OVERWRITE_TENANT_DOMAIN;
  }

  if (typeof req === "string") {
    return req;
  }

  if (typeof req === "object" && req.headers && req.headers.host) {
    return req.headers.host;
  }

  throw new Error("Invalid request parameter");
}

function getTenantProtocol(req) {
  let protocol = "http";

  if (typeof req === "string") {
    protocol = req;
  } else if (typeof req === "object" && req.headers && req.headers["x-forwarded-proto"]) {
    protocol = req.headers["x-forwarded-proto"];
  }

  if (!protocol) {
    protocol = "http";
  }

  if (Array.isArray(protocol)) {
    protocol = protocol[0];
  }

  protocol = protocol.split(",")[0];

  return protocol;
}

module.exports = {
  getTenantHost,
  getTenantProtocol,
  axios
};
