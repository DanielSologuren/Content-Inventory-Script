#!/bin/bash
shopt -s nullglob nocaseglob


find . -print0 | while read -d $'\0' file


do 
	if [ -d "$file" ]; then
		ext=""
		title="Directory"
		lang="EN"
	else
		ext=`echo "$file" | sed 's/.*\.//'`
		
		case $ext in
			pdf|PDF) 
				title=`pdftotext "$file" - | head -1`
				;;
			htm|html|shtm|shtml|HTML|SHTML|SHTM|HTM)
				title=`sed -n 's/.*<title>\(.*\)<\/title>.*/\1/ip;T;q' $file`
				;;
			png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)
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
	echo  "$file		$lang"
done