#!/bin/bash
shopt -s nullglob nocaseglob

find . -print0 | while read -d $'\0' file

do 
	if [ -d "$file" ]; then
		ext=""
		title="Directory"
	else
		ext=`echo "$file" | sed 's/.*\.//'`
		case $ext in
			pdf|PDF) 
				title=`pdftotext "$file" - | head -1`
				;;
			 htm|html|shtm|shtml|PHP|php|DWT|dwt)
				title=`sed -n 's/.*<title>\(.*\)<\/title>.*/\1/ip;T;q' $file`
				#title=`sed -n '/<title>/,/<\/title>/{
				#	s/^.*<title>//
				#	s/<\/title>.*$//
				#	p}' $file`
				;;

			png|jpg|jpeg|gif)
				title="IMAGE"
				;;
			mpg|mov|wmv|rm)
				title="MEDIA"
				;;
			*)
				title="UNKNOWN"
				;;
		esac
	fi
	size=`du -s "$file" | cut -d'	' -f1`
	echo  "$file	$title"
done