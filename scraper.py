from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import re

if __name__ == "__main__":
	dbal_url = "https://dining.caltech.edu/students/funds"
	dbal_req = Request(dbal_url)
	dbal_content = urlopen(dbal_req)

	dbal_soup = BeautifulSoup(dbal_content, "html.parser")

	date_list = []
	date_pattern = re.compile("[0-9]{1,2}/[0-9]{1,2}/[0-9]{2}")
	for el in dbal_soup.body.contents:
		temp = str(el)
		matches = []
		for i in range(len(temp) - 48):
			i = i + 8 * len([m for m in matches if m is not None])
			matches.append(date_pattern.match(temp, pos=i))
		for match in matches:
			if match != None:
				date_list.append(match.group())

	with open("dates.txt", "w") as f:
		for i in range(6):
			print("%s" % date_list[i], file=f)
