pipeline {
  agent any
    stages {
      
        stage('run backend') {
          steps {
            echo 'running gradle'
            withGradle() {
                sh './gradlew -v'
              }
          }
      }
      
      
    }
}
