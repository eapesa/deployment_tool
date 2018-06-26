import config from "../config.js";

const reference = {};
const releases = config.releases.link;
const dep_procedures = config.deployment_procedures.link;

reference.get = function(req, res) {
  res.status(200).json({
    code: "OK",
    message: "Operation completed successfully!",
    output: {
      links: {
        releases: releases,
        deployment_procedures: dep_procedures
      }
    }
  });
}

export default reference;
