pipeline {

  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Build image') {
      steps {
        sh 'docker build -t docgen .'
      }
    }

    stage('Publish image') {
      steps {
        sh '''#docker tag docgen:latest majortom327/docgen:latest
#docker push majortom327/docgen:latest'''
      }
    }

  }
}