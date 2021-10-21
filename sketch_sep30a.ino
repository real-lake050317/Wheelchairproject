const int leftdc = 11;
const int rightdc = 10;
const int sensor = 9;
int speed = 0;

void setup() {
  Serial.begin(9600);
  pinMode(rightdc, OUTPUT);
  pinMode(leftdc, OUTPUT);
  pinMode(sensor, INPUT);
}

void loop(){
  int control = 0;
  int temp;
  if (Serial.available()){
    temp = control;
    control = Serial.read();
  }
  if (control == temp){
    continue;
  }
  else{
    //시리얼 통신 -> openCV값 전달, 기존값과 비교 먼저 -> 안하면 모터 깔짝깔짝
    int a = analogRead(A0)/"""x""" //아날로그값을 리딩 + 적절하게 범위에 맞게 조정
    digitalWrite(leftdc, a);
    digitalWrite(rightdc, a);
    if (control == "0"){ // 전진 조건 + 속도조건?
      digitalWrite(leftdc, HIGH);
      digitalWrite(rightdc, HIGH);
      //analogWrite(leftdc, """VARIATION""");//모터속도조건에 따라서 변수 설정
      //analogWrite(rightdc, """VARIATION""");//모터속도조건에 따라서 변수 설정
    }
    if (control = "3"){ //오른쪽 회전조건;
      digitalWrite(leftdc, HIGH);
      digitalWrite(rightdc, LOW);
    }
    if (control = "2"){ //왼쪽 회전조건
      digitalWrite(leftdc, LOW);
      digitalWrite(rightdc, HIGH);
    }
    if (control == "1"){ //후진조건
      digitalWrite(leftdc, LOW);
      digitalWrite(rightdc, LOW);
      //analogWrite(leftdc, """VARIATION""");//모터속도조건에 따라서 변수 설정
      //analogWrite(rightdc, """VARIATION""");//모터속도조건에 따라서 변수 설정
    }
  }
}