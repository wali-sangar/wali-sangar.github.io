pipline {
  agent any
    stages {
      stage('run frontent') {
          steps {
          echo 'executing yarn...'
          nodejs(17.6.0) {
                sh 'yarn isntall'
             }
          }
      }
      
        stage('run backent') {
          steps {
          echo 'executing gradle...'
            withGradle() {
                sh './gradlew -v'
              }
          }
      }
    }
}
