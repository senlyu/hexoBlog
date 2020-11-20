cd /home/www/hexoBlog
if [ -d public ]
then 
    echo 'exist'
    rm -rf public
fi
unzip public.zip -d ./