pipeline {

  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Build image') {
      steps {
        docker.build registry + ":$BUILD_NUMBER"
      }
    }
  }
}

