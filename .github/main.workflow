workflow "Build and deploy on push" {
  on = "push"
  resolves = ["deploy"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "npm build"
}

action "GitHub Action for Google Cloud SDK auth" {
  uses = "actions/gcloud/auth@dc2b6c3bc6efde1869a9d4c21fcad5c125d19b81"
  needs = ["Build"]
  secrets = ["GCLOUD_AUTH"]
}

action "deploy" {
  uses = "actions/gcloud/cli@dc2b6c3bc6efde1869a9d4c21fcad5c125d19b81"
  needs = ["GitHub Action for Google Cloud SDK auth"]
  runs = "gcloud app deploy"
}
