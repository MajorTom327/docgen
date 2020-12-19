pipeline {
  def docgenImage
  environment {
    registry = "majortom327/docgen"
    registryCredential = 'dockerhub'
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
            docgenImage.push("${env.BUILD_NUMBER}")
            docgenImage.push("latest")
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