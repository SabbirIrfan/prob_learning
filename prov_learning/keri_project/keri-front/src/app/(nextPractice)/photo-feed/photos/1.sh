i=1
for file in *.jpg; do
    mv "$file" "$i.png"
    ((i++))
done
