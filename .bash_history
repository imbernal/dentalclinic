rar
rarp
man rarp
ls
unzip Dental\ Clinic.zip 
ls
rm -rf Dental\ Clinic.zip 
cd Dental\ Clinic/
ls
cd proyecto/
ls
cd ..
mv proyecto/ ..
ls
cd ..
ls
rm -rf Dental\ Clinic/
ls
cd proyecto/
git status
git remote add bitbucket https://ibernal@bitbucket.org/ibernal/dental_clinic.git
git config --global user.name "Ces
git config --global user.name "Israel Michel Bernal Martinez"
git config --global user.email "imbernal9203@gmail.com"
git add .
git commit -am "Initial commit"
git status
git push bitbucket master 
ls
ls -a
mv .git ..
mv .gitignore 
mv .gitignore ..
mv app/
mv app/ ..
mv db.sqlite3 ..
mv manage.py ..
mv proyecto/ ..
mv proyecto/ proyecto_base
mv proyecto_base/ ..
ls
mv requirements.txt ..
ls -a
cd ..
ls
rm proyecto
rm -rf proyecto
mv proyecto_base/ proyecto
ls
virtualenv --python=python3.4 .env
ls
nano requirements.txt 
source .env/bin/activate
pip install -r requirements.txt 
