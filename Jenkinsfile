pipeline {
  agent any
  stages {
    stage('test') {
      echo 'testing'
    }
    
    stage('build') {
      echo 'building'
    }
    
  }
  post {
    always {
      echo 'post block executed'
    }
  }
}
