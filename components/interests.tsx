import {BookOpen, Music2, Waves} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export async function Interests() {
  const t = await getTranslations();
  const interests = [
    {key: 'music', Icon: Music2},
    {key: 'reading', Icon: BookOpen},
    {key: 'swimming', Icon: Waves}
  ] as const;

  return <section className="personal-interests" aria-labelledby="interests-title">
    <div className="interests-intro">
      <p className="eyebrow">{t('interests')}</p>
      <h2 id="interests-title">{t('interestsTitle')}</h2>
    </div>
    <div className="hobby-grid">
      {interests.map(({key, Icon}) => <article className="hobby" key={key}>
        <Icon className="hobby-icon" size={27} strokeWidth={1.3} aria-hidden="true"/>
        <h3>{t(`hobbies.${key}.title`)}</h3>
        <p>{t(`hobbies.${key}.description`)}</p>
      </article>)}
    </div>
  </section>;
}
