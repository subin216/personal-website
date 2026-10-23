'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {awards, type Award, type Locale} from '@/data/profile';

function AwardItem({award, locale}: {award: Award; locale: Locale}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const open = hovered || expanded;
  const detailId = `award-${award.id}`;
  const heading = <><strong>{award.title[locale]}</strong><span className="award-meta">{award.issuer} · {award.date[locale]}</span></>;

  return <li className="award-item"
    onMouseEnter={event => {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && event.currentTarget.contains(event.target as Node)) setHovered(true);
    }}
    onMouseLeave={() => setHovered(false)}
    onKeyDown={event => {if (event.key === 'Escape') {setExpanded(false); setHovered(false);}}}>
    {award.details.length ? <>
      <button className="award-trigger" aria-expanded={open} aria-controls={detailId} onClick={() => setExpanded(!expanded)}>
        <span>{heading}</span><ChevronDown size={16} aria-hidden="true"/>
      </button>
      <div id={detailId} className="award-details" hidden={!open}>
        {award.details.map(detail => <p key={detail.en}>{detail[locale]}</p>)}
      </div>
    </> : <div className="award-static">{heading}</div>}
  </li>;
}

export function Awards({locale}: {locale: Locale}) {
  return <ul className="recognition-list awards-list">{awards.map(award => <AwardItem key={award.id} award={award} locale={locale}/>)}</ul>;
}
