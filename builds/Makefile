BUILD = builds
WEEK = 01
TITLE = metadata/title.txt
METADATA = metadata/metadata.xml
HOME = /Users/michaelherman
CHAPTERS = $(wildcard ../week01/01_plans/*.md)
TOC = --toc --toc-depth=2
LATEX_CLASS = report


all: html pdf

clean:
	rm -r $(BUILD)

check:
	./check

html: $(BUILD)/$(WEEK).html

pdf: $(BUILD)/$(WEEK).pdf

$(BUILD)/$(WEEK).html: $(CHAPTERS)
	mkdir -p $(BUILD)
	pandoc $(TOC) --standalone --to=html5 -o $@ $^

$(BUILD)/$(WEEK).pdf: $(TITLE) $(CHAPTERS)
	mkdir -p $(BUILD)
	pandoc $(TOC) --template=latex/mytemplate.tex --variable mainfont=Georgia -V geometry:margin=1in --variable sansfont=Arial --variable fontsize=12pt --no-highlight --listings --latex-engine=xelatex  -V documentclass=$(LATEX_CLASS) -o $@ $^

.PHONY: all clean html pdf check
