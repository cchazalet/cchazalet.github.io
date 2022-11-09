username=$(whoami)
PORT=8080
PREFIX=/tmp/$username/apache2
PATHCODE="/home/$username/Documents/5TCA/cchazalet.github.io/"

echo "Ce script déploie Apache (port: $PORT) sur les machines TC (dans le dossier $PREFIX)" 
cd /tmp
mkdir $username
cd /tmp/$username
mkdir apache2
wget -q https://dlcdn.apache.org/httpd/httpd-2.4.54.tar.gz
tar -xf httpd-2.4.54.tar.gz
rm -rf httpd-2.4.54.tar.gz

# Download APR
cd /tmp/$username/httpd-2.4.54/srclib
wget -q https://dlcdn.apache.org//apr/apr-1.7.0.tar.gz
tar -xf apr-1.7.0.tar.gz
mv apr-1.7.0 apr
rm -rf apr-1.7.0.tar.gz

# Download APR-Util
cd /tmp/$username/httpd-2.4.54/srclib
wget -q https://dlcdn.apache.org//apr/apr-util-1.6.1.tar.gz
tar -xf apr-util-1.6.1.tar.gz
mv apr-util-1.6.1 apr-util
rm -rf apr-util-1.6.1.tar.gz

cd /tmp/$username/httpd-2.4.54
./configure --prefix=$PREFIX --with-included-apr > /dev/null 2>&1
make > /dev/null 2>&1
make install > /dev/null 2>&1

#backup httpd.conf
cp $PREFIX/conf/httpd.conf $PREFIX/conf/httpd.conf.ori

sed -i "s:^Listen.*:Listen $PORT:g" $PREFIX/conf/httpd.conf

rm -rf $PREFIX/htdocs
ln -s $PATHCODE htdocs

#Start apache
$PREFIX/bin/apachectl -k start

