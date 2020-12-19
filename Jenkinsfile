pipeline {
  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Build image') {
      steps {
        script {
          docgenImage = docker.build registry
        }
      }
    }

    stage('Publish image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("${env.BUILD_NUMBER}")
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('cleanup docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}