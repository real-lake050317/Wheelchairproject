
int in1 = 9;
int in2 = 6;
int in3 = 10;
int in4 = 11;
 
 
void setup() {
  Serial.begin(9600);
  pinMode(in1, OUTPUT);    
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
}
 
void loop() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  delay(1000);
 
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  delay(1000);
}
